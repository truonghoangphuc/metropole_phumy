export default {
  routes: [
    // {
    //  method: 'GET',
    //  path: '/email-sender',
    //  handler: 'email-sender.exampleAction',
    //  config: {
    //    policies: [],
    //    middlewares: [],
    //  },
    // },
    {
      method: "POST",
      path: "/email/send",
      handler: "email-sender.sendEmail",
      config: {
        policies: [], // Add policies for authentication/authorization if needed
      },
    },
  ],
};
