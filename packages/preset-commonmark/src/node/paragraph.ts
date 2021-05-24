import { SerializerNode, Node } from '@milkdown/core';

export class Paragraph extends Node {
    id = 'paragraph';
    schema = {
        content: 'inline*',
        group: 'block',
        parseDOM: [{ tag: 'p' }],
        toDOM: () => ['p', { class: 'paragraph' }, 0] as const,
    };
    parser = {
        block: this.id,
    };
    serializer: SerializerNode = (state, node) => {
        state.renderInline(node).closeBlock(node);
    };
}