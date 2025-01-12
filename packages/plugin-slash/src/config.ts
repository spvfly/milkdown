/* Copyright 2021, Milkdown by Mirone. */
import { commandsCtx, themeToolCtx } from '@milkdown/core';
import {
    InsertHr,
    InsertImage,
    InsertTable,
    TurnIntoCodeFence,
    TurnIntoHeading,
    TurnIntoTaskList,
    WrapInBlockquote,
    WrapInBulletList,
    WrapInOrderedList,
} from '@milkdown/preset-gfm';

import type { SlashConfig } from '.';
import { createDropdownItem, nodeExists } from './utility';

export const config: SlashConfig = ({ ctx }) => [
    {
        id: 'h1',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Large Heading', 'h1'),
        command: () => ctx.get(commandsCtx).call(TurnIntoHeading, 1),
        keyword: ['h1', 'large heading'],
        enable: nodeExists('heading'),
    },
    {
        id: 'h2',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Medium Heading', 'h2'),
        command: () => ctx.get(commandsCtx).call(TurnIntoHeading, 2),
        keyword: ['h2', 'medium heading'],
        enable: nodeExists('heading'),
    },
    {
        id: 'h3',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Small Heading', 'h3'),
        command: () => ctx.get(commandsCtx).call(TurnIntoHeading, 3),
        keyword: ['h3', 'small heading'],
        enable: nodeExists('heading'),
    },
    {
        id: 'bulletList',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Bullet List', 'bulletList'),
        command: () => ctx.get(commandsCtx).call(WrapInBulletList),
        keyword: ['bullet list', 'ul'],
        enable: nodeExists('bullet_list'),
    },
    {
        id: 'orderedList',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Ordered List', 'orderedList'),
        command: () => ctx.get(commandsCtx).call(WrapInOrderedList),
        keyword: ['ordered list', 'ol'],
        enable: nodeExists('ordered_list'),
    },
    {
        id: 'taskList',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Task List', 'taskList'),
        command: () => ctx.get(commandsCtx).call(TurnIntoTaskList),
        keyword: ['task list', 'task'],
        enable: nodeExists('task_list_item'),
    },
    {
        id: 'image',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Image', 'image'),
        command: () => ctx.get(commandsCtx).call(InsertImage),
        keyword: ['image'],
        enable: nodeExists('image'),
    },
    {
        id: 'blockquote',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Quote', 'quote'),
        command: () => ctx.get(commandsCtx).call(WrapInBlockquote),
        keyword: ['quote', 'blockquote'],
        enable: nodeExists('blockquote'),
    },
    {
        id: 'table',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Table', 'table'),
        command: () => ctx.get(commandsCtx).call(InsertTable),
        keyword: ['table'],
        enable: nodeExists('table'),
    },
    {
        id: 'code',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Code Fence', 'code'),
        command: () => ctx.get(commandsCtx).call(TurnIntoCodeFence),
        keyword: ['code'],
        enable: nodeExists('fence'),
    },
    {
        id: 'divider',
        dom: createDropdownItem(ctx.get(themeToolCtx), 'Divide Line', 'divider'),
        command: () => ctx.get(commandsCtx).call(InsertHr),
        keyword: ['divider', 'hr'],
        enable: nodeExists('hr'),
    },
];
