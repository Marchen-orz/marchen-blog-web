---
title: "深入理解 React Reconciliation"
description: "记录 React 如何比较虚拟树、复用节点以及 key 为什么重要。"
pubDate: 2026-05-08
updatedDate: 2026-05-09
tags: ["React", "前端", "源码阅读"]
category: "前端工程"
draft: false
cover: "/images/blog-react.svg"
syncToKb: true
visibility: "public"
---

React 的更新过程可以理解为：把新旧两棵树进行比较，然后尽可能复用已有节点。

## 树比较的前提

React 不会做代价极高的全量树编辑距离计算。它基于两个经验假设：

- 不同类型的元素会产生不同的树。
- 开发者可以通过 `key` 提示哪些子节点是稳定的。

## key 的作用

`key` 不是给组件内部读取的 props，它是给协调过程使用的身份标识。

当列表重排时，稳定的 key 可以帮助 React 判断“这是原来的那个节点”，从而减少不必要的销毁和重建。

## 记忆方式

把 `key` 当成列表项的身份证，而不是数组下标。只要这个实体没有变，它的 key 就不应该变。
