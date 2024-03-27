use crate::components::{header::Header, intro::Intro, scroll_down::ScrollDown, social::Social};
use sycamore::prelude::*;

#[component]
pub fn Landing<G: Html>(cx: Scope) -> View<G> {
    view! {cx,
        main(class="landing") {
            Header
            Social
            Intro
            ScrollDown
        }
    }
}
