use perseus::prelude::*;
use sycamore::prelude::*;

use crate::components::{header::Header, loader::Loader, social::Social};

#[component]
pub fn Error<'a, G: Html>(cx: Scope<'a>, ErrorProps { children }: ErrorProps<'a, G>) -> View<G> {
    let children = children.call(cx);

    view! { cx,
        Loader
        main(class="error") {
            Header
            Social
            div(class="error__content") {
                (children)
            }
        }
    }
}

#[component]
pub fn ErrorHead(cx: Scope) -> View<SsrNode> {
    view! { cx,
        link(rel="stylesheet", href=".perseus/static/styles/layout.css")
        link(rel="stylesheet", href=".perseus/static/styles/cool-item.css")
    }
}

#[derive(Prop)]
pub struct ErrorProps<'a, G: Html> {
    pub children: Children<'a, G>,
}
