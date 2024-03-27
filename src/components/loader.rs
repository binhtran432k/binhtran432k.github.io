use std::fs;

use sycamore::prelude::*;

#[component]
pub fn Loader<G: Html>(cx: Scope) -> View<G> {
    view! {cx,
        div(class="loader") {
            style { (fs::read_to_string("static/styles/loader.css").expect("Cannot read loader.css")) }
            div(class="loader__box") {
                img(src=".perseus/static/assets/images/mangekyou-sharingan.svg",
                    loading="lazy",
                    alt="Loader image",
                    class="loader__image")
                div(class="loader__text") {
                    "L"
                    div(class="loader__text--dot")
                    "oading Experience"
                    div(class="loader__text--border loading__width-animation")
                }
                div(class="loader__bar") {
                    div(class="loader__bar--inner")
                }
                div(class="loader__counter") {
                    span {"0%"}
                    span(class="loader__counter--number") {"0%"}
                }
            }
        }
        script { (fs::read_to_string("static/scripts/loader.js").expect("Cannot read loader.js")) }
    }
}
