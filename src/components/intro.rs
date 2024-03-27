use sycamore::prelude::*;

#[component]
pub fn Intro<G: Html>(cx: Scope) -> View<G> {
    view! {cx,
        div(class="intro") {
            h4 { "Hi 👋, My name is" }
            h1 { "Binh Tran" }
            h2 { "Full stack  web developer" }
            h2 { "Automation tester" }
            h2 { "from Vietnam" }
        }
    }
}
