use sycamore::prelude::*;

use crate::components::cool_link::CoolLink;

#[component]
pub fn Header<G: Html>(cx: Scope) -> View<G> {
    view! {cx,
        header(class="header") {
            div(class="header__container") {
                ul(class="header__left") {
                    li(class="header--xs") { CoolLink(text="Home", to="") }
                    li(class="header--sm") { CoolLink(text="Reviews", to="#") }
                    li { CoolLink(text="Projects", to="#") }
                    li(class="header--sm") { CoolLink(text="Insights", to="#") }
                    li(class="header--sm") { CoolLink(text="Faq", to="#") }
                }
                div(class="header__right") {
                    button(class="cool-button") {span{"Contact"}}
                }
            }
        }
    }
}
