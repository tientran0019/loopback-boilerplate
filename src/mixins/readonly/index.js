/* --------------------------------------------------------
* Author Trần Đức Tiến
* Email ductienas@gmail.com
* Phone 0972970075
*
* Created: 2018-09-18 23:36:37
*------------------------------------------------------- */

import { deprecate } from 'util';
import readonly from './readonly';

export default deprecate((app) => {
	app.loopback.modelBuilder.mixins.define('Readonly', readonly);
});

module.exports = exports.default; // eslint-disable-line
