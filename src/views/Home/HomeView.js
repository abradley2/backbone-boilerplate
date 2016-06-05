var template = require('./HomeTemplate.hbs')

module.exports = Backbone.View.extend({

    template: template,

    initialize: function (el, params) {
        this.model = new Backbone.Model(params)

        this.model.on('change:message', this.render, this)
    },


    render: function () {
        var html = this.template(
            this.model.toJSON()
        )

        this.$el.html(html)
    },

    remove: function () {
        this.model.off()
        this.$el.empty()
    }

})
