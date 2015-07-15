var connectSlider = document.getElementById('connect');

			noUiSlider.create(connectSlider, {
				start: [4000, 11000],
				connect: false,
				range: {
					'min': 0,
					'max': 15000
				},
				format: wNumb({
					mark: false,
					thousand: ' ',
					postfix: 'Р',
				})
			});

			var connectBar = document.createElement('div'),
				connectBase = connectSlider.getElementsByClassName('noUi-base')[0],
				connectHandles = connectSlider.getElementsByClassName('noUi-origin');

			// Give the bar a class for styling and add it to the slider.
			connectBar.className += 'connect';
			connectBase.appendChild(connectBar);

			connectSlider.noUiSlider.on('update', function( values, handle ) {

				// Pick left for the first handle, right for the second.
				var side = handle ? 'right' : 'left',
				// Get the handle position and trim the '%' sign.
					offset = (connectHandles[handle].style.left).slice(0, - 1);

				// Right offset is 100% - left offset
				if ( handle === 1 ) {
					offset = 100 - offset;
				}

				connectBar.style[side] = offset + '%';
			});



			var tipHandles = connectSlider.getElementsByClassName('noUi-handle'),
					tooltips = [];

				// Add divs to the slider handles.
				for ( var i = 0; i < tipHandles.length; i++ ){
					tooltips[i] = document.createElement('div');
					tipHandles[i].appendChild(tooltips[i]);
				}

				// Add a class for styling
				tooltips[1].className += 'tooltip';
				// Add additional markup
				tooltips[1].innerHTML = '<span></span>';
				// Replace the tooltip reference with the span we just added
				tooltips[1] = tooltips[1].getElementsByTagName('span')[0];

				// Add a class for styling
				tooltips[0].className += 'tooltip';
				// Add additional markup
				tooltips[0].innerHTML = '<span></span>';
				// Replace the tooltip reference with the span we just added
				tooltips[0] = tooltips[0].getElementsByTagName('span')[0];

				// When the slider changes, write the value to the tooltips.
				connectSlider.noUiSlider.on('update', function( values, handle ){
					tooltips[handle].innerHTML = values[handle];
				});
