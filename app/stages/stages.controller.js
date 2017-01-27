(function () {
	'use strict';

	angular
		.module('jazzhands.consulting')
    .controller('StagesController', StagesController);

	function StagesController() {
		const vm = this;

		vm.$onInit = function() {
			vm.stages = [{
				title: 'Stage 1: Recruitment',
				description: 'Volunteers will be recruited from around the world to be trained in the Jazz Hands Forever™ methodology.',
				image: 'https://slack-imgs.com/?c=1&url=http%3A%2F%2Fmedia3.giphy.com%2Fmedia%2F106QCYtKPDeIjm%2Fgiphy.gif'
			}, {
				title: 'Stage 2: Training',
				description: 'Recruits will be put through a 2 week training program where they will master the Jazz Hands Forever™ methodology.',
				image: 'https://media.giphy.com/media/jHwXMkk0VWVKU/giphy.gif'
			}, {
				title: 'Stage 3: Bussed to Rotation',
				description: 'Upon graduating the training program, recruits are bussed to the border to begin their 4 week rotation.',
				image: 'http://www.partybusgroup.com/wp-content/uploads/2015/09/1.jpg'
			}];

			vm.currentStageIndex = 0;
			vm.currentStage = vm.stages[vm.currentStageIndex];
		}

		vm.nextStep = function() {
			vm.currentStageIndex++;

			if(vm.currentStageIndex == vm.stages.length) {
				vm.currentStageIndex = 0;
			}

			vm.currentStage = vm.stages[vm.currentStageIndex];
		}

	}

})();
