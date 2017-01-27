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
				image: 'https://s-media-cache-ak0.pinimg.com/originals/40/43/8a/40438a691a06af2cda671fe287b68579.jpg'
			}, {
				title: 'Stage 2: Training',
				description: 'Recruits will be put through a 2 week training program where they will master the Jazz Hands Forever™ methodology.',
				image: 'https://tax.thomsonreuters.com/wp-content/images/cs-professional-suite/banners/training-and-consulting-banner.jpg'
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
