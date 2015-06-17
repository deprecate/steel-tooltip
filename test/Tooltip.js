'use strict';

import Tooltip from '../src/Tooltip';

describe('Tooltip', function() {
	it('should render component', function() {
		assert.doesNotThrow(function() {
			new Tooltip().render();
		});
	});
});
