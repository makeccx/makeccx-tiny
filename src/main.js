/// <reference path="../clipcc-extension.d.ts" />

/** @type {import("clipcc-extension")} */
const { api, type, Extension } = self.ClipCCExtension 

const extension_id = "unknown.extension"

const categoryId = extension_id + '.category'


const blocks = [
    {
        categoryId,
        opcode: categoryId + '.string',
        messageId: categoryId + '.string',
        type: type.BlockType.REPORTER,
        param: {
            v: {
                type: type.ParameterType.STRING,
                default: 'Hello World!'
            }
        },
        function(args, util) {
            return String(args.v)
        },
    },
]


module.exports = class extends Extension {
    onUninit() {
        api.removeCategory(categoryId)
    }
    onInit() {
        api.removeCategory(categoryId)
        api.addCategory({
            categoryId,
            messageId: categoryId,
            color: '#339900',
        })
        api.addBlocks(blocks);
    }
}
