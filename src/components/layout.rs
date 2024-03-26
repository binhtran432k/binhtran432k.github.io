use sycamore::prelude::*;

#[component]
pub fn Layout<'a, G: Html>(cx: Scope<'a>, LayoutProps { children }: LayoutProps<'a, G>) -> View<G> {
    let children = children.call(cx);

    view! { cx,
        div(class="loader") {
            div(class="loader__box") {
                img(src=".perseus/static/assets/images/mangekyou-sharingan.svg", alt="Loader image", class="loader__image")
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
            script(src=".perseus/static/scripts/loader.js", defer=true)
        }
        main {
            (children)
        }
    }
}

#[derive(Prop)]
pub struct LayoutProps<'a, G: Html> {
    pub children: Children<'a, G>,
}
