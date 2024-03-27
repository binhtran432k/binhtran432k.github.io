use sycamore::prelude::*;

#[component]
pub fn CoolLink<G: Html>(cx: Scope, CoolLinkProps { to, text }: CoolLinkProps) -> View<G> {
    view! {cx,
        a(href=(to), class="cool-link", data-text=(text)){span{(text)}}
    }
}

#[derive(Prop)]
pub struct CoolLinkProps {
    to: &'static str,
    text: &'static str,
}
