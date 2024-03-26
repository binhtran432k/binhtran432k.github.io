use perseus::prelude::*;
use sycamore::prelude::*;

use crate::components::layout::Layout;

fn index_page<G: Html>(cx: Scope) -> View<G> {
    view! { cx,
        Layout {
            h1 { "Welcome to Perseus!" }
            p {
                "This is just an example app. Try changing some code inside "
                code { "src/templates/index.rs" }
                " and you'll be able to see the results here!"
            }
        }
    }
}

#[engine_only_fn]
fn head(cx: Scope) -> View<SsrNode> {
    view! { cx,
        title { "BINH TRAN - Fullstack Developer" }
    }
}

pub fn get_template<G: Html>() -> Template<G> {
    Template::build("index").view(index_page).head(head).build()
}
