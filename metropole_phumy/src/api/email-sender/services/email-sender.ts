/**
 * email-sender service
 */

export default () => ({
  async sendCustomEmail(to:string, subject:string, text:string, html:string) {
    try {
      await strapi.plugins["email"].services.email.send({
        to,
        from: strapi.config.get("plugin.email.settings.defaultFrom"), // Uses configured defaultFrom
        subject,
        text,
        html,
      });
      return "Email sent successfully!";
    } catch (err) {
      console.error("Error sending email:", err);
      throw new Error("Failed to send email.");
    }
  },
});
