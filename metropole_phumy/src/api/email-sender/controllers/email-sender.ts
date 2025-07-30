/**
 * A set of functions called "actions" for `email-sender`
 */

export default {
  // exampleAction: async (ctx, next) => {
  //   try {
  //     ctx.body = 'ok';
  //   } catch (err) {
  //     ctx.body = err;
  //   }
  // }
  async sendEmail(ctx: { request: { body: { to: string; subject: string; text: string; html: string; }; }; badRequest: (arg0: string) => any; send: (arg0: { message: any; }) => void; internalServerError: (arg0: string, arg1: any) => void; }) {
    const { to, subject, text, html } = ctx.request.body;
    if (!to || !subject || (!text && !html)) {
      return ctx.badRequest(
        "Missing required fields: to, subject, and either text or html."
      );
    }
    try {
      const result = await strapi
        .service("api::email-sender.email-sender")
        .sendCustomEmail(to, subject, text, html);
      ctx.send({ message: result });
    } catch (err) {
      ctx.internalServerError("Error sending email", err.message);
    }
  },
};
