const slugify = require("slugify");

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      strapi.log.debug("beforeCreate:");
      data.slug = slugify(data.title, {remove: /[$+=@:/?.,;'"()!]/g, lower: true });
      data.excerpt = data.content.substr(0, 255);
    },
    async beforeUpdate(params, data) {
      strapi.log.debug("beforeUpdate :");
      data.slug = slugify(data.title, {remove: /[$+=@:/?.,;'"()!]/g, lower: true });
      data.excerpt = data.content.substr(0, 255);
    },
  },
};

