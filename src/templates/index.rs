use perseus::prelude::*;
use sycamore::prelude::*;

use crate::{
    components::landing::Landing,
    layouts::index::{Index, IndexHead},
};

fn index_page<G: Html>(cx: Scope) -> View<G> {
    view! { cx,
        Index {
            Landing
        }
    }
}

#[engine_only_fn]
fn head(cx: Scope) -> View<SsrNode> {
    view! { cx,
        title { "BINH TRAN - Fullstack Developer" }
        IndexHead
    }
}

pub fn get_template<G: Html>() -> Template<G> {
    Template::build("index").view(index_page).head(head).build()
}
