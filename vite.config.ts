import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { Resend } from "resend";

const resend = new Resend("re_BRZ8WUtU_2LeehcDAyhYdwHfLW2wDctwr");

const apiPlugin = () => ({
  name: 'api-plugin',
  configureServer(server: any) {
    server.middlewares.use(async (req: any, res: any, next: any) => {
      if (req.url === '/api/contact' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            const data = JSON.parse(body);
            const { name, email, subject, message } = data;
            
            const { error } = await resend.emails.send({
              from: "Portfolio Contact <onboarding@resend.dev>",
              to: ["taimoort137@gmail.com"],
              reply_to: email,
              subject: `[Portfolio] ${subject}`,
              html: `
                <div style="font-family: sans-serif; padding: 20px;">
                  <h2>New Message</h2>
                  <p><strong>From:</strong> ${name} (${email})</p>
                  <p><strong>Subject:</strong> ${subject}</p>
                  <hr />
                  <p>${message}</p>
                </div>
              `,
            });
            
            res.setHeader('Content-Type', 'application/json');
            if (error) {
              res.statusCode = 500;
              res.end(JSON.stringify({ error }));
            } else {
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true }));
            }
          } catch (e: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
        return;
      }
      next();
    });
  }
});

export default defineConfig({
  plugins: [react(), tailwindcss(), apiPlugin()],
  server: {
    port: 5173,
  },
  build: {
    target: "esnext"
  },
});
