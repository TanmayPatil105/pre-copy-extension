//
// extension.js
//
// Copyright 2025 Tanmay Patil <tanmaynpatil105@gmail.com>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.
//
// SPDX-License-Identifier: AGPL-3.0-or-later
//
//

function AddCopyButton() {
	const pres = document.querySelectorAll('pre');

	pres.forEach ((pre) => {
		const newpar = document.createElement('div');
		const cpybutton = document.createElement('button');

		// set css
		newpar.className = 'container';
		cpybutton.className = 'copy-button';

		// copy button text
		cpybutton.innerHTML = 'Copy';

		cpybutton.addEventListener('click', async() => {
			await navigator.clipboard.writeText (pre.textContent);
			cpybutton.innerHTML = 'Copied!';
			setTimeout(() => {
				cpybutton.innerHTML = 'Copy';
			}, 1000);
		})

		pre.parentNode.insertBefore(newpar, pre);
		newpar.appendChild(cpybutton);
		newpar.appendChild(pre);
	})
}

// Init
//
// If DOM is not loaded, then add a callback to be called
// when loaded
// OR
// If loaded, update DOM with copy buttons
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', AddCopyButton);
} else {
	AddCopyButton();
}
