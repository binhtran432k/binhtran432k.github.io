use sycamore::prelude::*;

#[component]
pub fn ScrollDown<G: Html>(cx: Scope) -> View<G> {
    view!{cx,
        div(class="scroll-down") {
            div(class="scroll-down__wheel") {
                div(class="scroll-down__wheel--inner")
            }
            div(class="scroll-down__arrows") {
                span(class="scroll-down__arrow")
                span(class="scroll-down__arrow")
                span(class="scroll-down__arrow")
            }
        }
    }
}
