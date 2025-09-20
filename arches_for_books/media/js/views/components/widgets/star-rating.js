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

    var self = this;


    let maxFloat = parseFloat(self.max()); 
    let stepFloat = parseFloat(self.step());

    let numberOfStars = parseInt(self.max())
    self.stars = ko.observableArray();
    for (let i = 0; i < numberOfStars; i++) {
        self.stars.push({value:i+1})
    }

    console.log(numberOfStars, self.stars)
    
    // need an array of objects with each star portion
    // 0 -> 5 with a new entry for every 0.25

    // let numberOfStars = maxFloat;
    // let totalNumberRadioInputs = maxFloat / stepFloat;

    // self.stars.push({value:1});
    // self.stars.push({value:2});
    // self.stars.push({value:3});

    // const numberOfStars = maxFloat / stepFloat


    this.setOptionSelection = function(opt, selected) {
        console.log(opt)
        if (ko.unwrap(self.disabled) === false) {
            if (selected) {
                if (self.value() === opt) {
                    self.value(null);
                }
                else {
                    self.value(opt);
                }
            }
        }
        console.log(self.value())
    };

    this.isOptionSelected = function() {
        var selected = false;
        var val = self.value();
        if (val) {
            selected = val;
        }
        console.log(selected)
        return selected;
    };

    // https://medium.com/@psfonseka/creating-five-star-rating-components-with-react-and-pure-css-aa6f8316a7d4

};


export default ko.components.register('star-rating', {
    viewModel: StarRatingWidget,
    template: StarRatingWidgetTemplate,
});
