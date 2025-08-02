export default () => ({
  tinymce: {
    enabled: true,
    config: {
      editor: {
        outputFormat: "html",
        // tinymceSrc: "/plugins/tinymce/tinymce.min.js",
        editorConfig: {
          language: "en",
          height: 500,
          menubar: true,
          extended_valid_elements: "span, img, small",
          forced_root_block: "",
          convert_urls: false,
          entity_encoding: "raw",
          plugins:
            "advlist autolink lists link image charmap preview anchor \
                  searchreplace visualblocks code fullscreen table emoticons nonbreaking \
                  insertdatetime media table code help wordcount",
          toolbar:
            "undo redo | styles | bold italic forecolor backcolor | \
                  alignleft aligncenter alignright alignjustify | \
                  media table emoticons visualblocks code|\
                  nonbreaking bullist numlist outdent indent | removeformat | help",
          style_formats: [
            {
              title: "Headings",
              items: [
                { title: "h1", block: "h1" },
                { title: "h2", block: "h2" },
                { title: "h3", block: "h3" },
                { title: "h4", block: "h4" },
                { title: "h5", block: "h5" },
                { title: "h6", block: "h6" },
              ],
            },

            {
              title: "Text",
              items: [
                { title: "Paragraph", block: "p" },
                {
                  title: "Paragraph with small letters",
                  block: "small",
                },
              ],
            },
          ],
        },
      },
    },
  },
  "strapi-csv-import-export": {
    config: {
      authorizedExports: [
        "api::form-submission.form-submission",
        "api::subscriber.subscriber",
      ],
    },
  },
  // email: {
  //   config: {
  //     provider: "strapi-provider-email-resend",
  //     providerOptions: {
  //       apiKey: process.env.RESEND, // Required
  //     },
  //     settings: {
  //       defaultFrom: "truonghoangphuc84@gmail.com",
  //       defaultReplyTo: "YOUR_EMAIL_HERE",
  //     },
  //   },
  // },
  email: {
    config: {
      provider: "nodemailer",
      providerOptions: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USERNAME,
          pass: process.env.SMTP_PASSWORD,
        },
        secure: true,
      },
      settings: {
        defaultFrom: process.env.SMTP_USERNAME,
        defaultReplyTo: "truonghoangphuc84@gmail.com",
      },
    },
  },
  // config/plugins.{js,ts}
  "strapi-cache": {
    enabled: true,
    config: {
      debug: false, // Enable debug logs
      max: 1000, // Maximum number of items in the cache (only for memory cache)
      ttl: 1000 * 60 * 60, // Time to live for cache items (1 hour)
      size: 1024 * 1024 * 1024, // Maximum size of the cache (1 GB) (only for memory cache)
      allowStale: false, // Allow stale cache items (only for memory cache)
      cacheableRoutes: [
        "/api/pages",
        "/api/site-setting",
        "/api/header",
        "/api/footer",
      ], // Caches routes which start with these paths (if empty array, all '/api' routes are cached)
      provider: "memory", // Cache provider ('memory' or 'redis')
      // redisConfig: env("REDIS_URL", "redis://localhost:6379"), // Redis config takes either a string or an object see https://github.com/redis/ioredis for references to what object is available, the object or string is passed directly to ioredis client (if using Redis)
      redisClusterNodes: [], // If provided any cluster node (this list is not empty), initialize ioredis redis cluster client. Each object must have keys 'host' and 'port'. See https://github.com/redis/ioredis for references
      redisClusterOptions: {}, // Options for ioredis redis cluster client. redisOptions key is taken from redisConfig parameter above if not set here. See https://github.com/redis/ioredis for references
      cacheHeaders: true, // Plugin also stores response headers in the cache (set to false if you don't want to cache headers)
      cacheHeadersDenyList: ["access-control-allow-origin", "content-encoding"], // Headers to exclude from the cache (must be lowercase, if empty array, no headers are excluded, cacheHeaders must be true)
      cacheHeadersAllowList: ["content-type", "content-security-policy"], // Headers to include in the cache (must be lowercase, if empty array, all headers are cached, cacheHeaders must be true)
      cacheAuthorizedRequests: false, // Cache requests with authorization headers (set to true if you want to cache authorized requests)
      cacheGetTimeoutInMs: 1000, // Timeout for getting cached data in milliseconds (default is 1 second)
      autoPurgeCache: true, // Automatically purge cache on content CRUD operations
    },
  },
});
