use perseus::prelude::*;
use sycamore::prelude::*;

use crate::components::loader::Loader;

#[component]
pub fn Index<'a, G: Html>(cx: Scope<'a>, IndexProps { children }: IndexProps<'a, G>) -> View<G> {
    let children = children.call(cx);

    view! { cx,
        Loader()
        (children)
    }
}

#[component]
pub fn IndexHead(cx: Scope) -> View<SsrNode> {
    view! { cx,
        link(rel="stylesheet", href=".perseus/static/styles/layout.css")
        link(rel="stylesheet", href=".perseus/static/styles/cool-item.css")
    }
}

#[derive(Prop)]
pub struct IndexProps<'a, G: Html> {
    pub children: Children<'a, G>,
}
