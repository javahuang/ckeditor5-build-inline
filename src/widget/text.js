/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold
 */

import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import TextEditing from "./text/textediting";
import TextUI from "./text/textui";

/**
 * The bold feature.
 *
 * For a detailed overview check the {@glink features/basic-styles Basic styles feature documentation}
 * and the {@glink api/basic-styles package page}.
 *
 * This is a "glue" plugin which loads the {@link module:basic-styles/bold/boldediting~BoldEditing bold editing feature}
 * and {@link module:basic-styles/bold/boldui~BoldUI bold UI feature}.
 *
 * @extends module:core/plugin~Plugin
 */
export default class Text extends Plugin {
	/**
	 * @inheritDoc
	 */
	static get requires() {
		return [TextEditing, TextUI];
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return "Text";
	}
}
