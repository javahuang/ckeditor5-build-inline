/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module basic-styles/bold/boldediting
 */

import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
import AttributeCommand from "../attributecommand";

const TEXT = "text";

/**
 * The bold editing feature.
 *
 * It registers the `'bold'` command and introduces the `bold` attribute in the model which renders to the view
 * as a `<strong>` element.
 *
 * @extends module:core/plugin~Plugin
 */
export default class TextEditing extends Plugin {
	/**
	 * @inheritDoc
	 */
	init() {
		const editor = this.editor;
		// Allow bold attribute on text nodes.
		editor.model.schema.extend("$text", { allowAttributes: TEXT });

		// Build converter from model to view for data and editing pipelines.

		editor.conversion.attributeToElement({
			model: TEXT,
			view: "strong",
			upcastAlso: [
				"b",
				{
					styles: {
						"font-weight": "bold"
					}
				}
			]
		});

		// Create bold command.
		editor.commands.add(TEXT, new AttributeCommand(editor, TEXT));

		// Set the Ctrl+T keystroke.
		editor.keystrokes.set("CTRL+T", TEXT);
	}
}
