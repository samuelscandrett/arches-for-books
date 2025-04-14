import $ from 'jquery';
import _ from 'underscore';
import ko from 'knockout';
import WidgetViewModel from 'viewmodels/widget';
import StarRatingWidgetTemplate from 'templates/views/components/widgets/star-rating.htm'

/**
 * registers a text-widget component for use in forms
 * @function external:"ko.components".text-widget
 * @param {object} params
 * @param {string} params.value - the value being managed
 * @param {function} params.config - observable containing config object
 * @param {string} params.config().label - label to use alongside the text input
 * @param {string} params.config().placeholder - default text to show in the text input
 */

var StarRatingWidget = function(params) {
    params.configKeys = ['min', 'max', 'step'];
    WidgetViewModel.apply(this, [params]);
    console.log(this)
    var self = this;

    // console.log(params.configKeys)

};


export default ko.components.register('star-rating', {
    viewModel: StarRatingWidget,
    template: StarRatingWidgetTemplate,
});
