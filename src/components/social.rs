use std::fs;

use sycamore::prelude::*;

use crate::components::social_link::{SocialLink, SocialType};

#[component]
pub fn Social<G: Html>(cx: Scope) -> View<G> {
    view! {cx,
        div(class="social") {
            style { (fs::read_to_string("static/styles/social-icon.css").expect("Cannot read social-icon.css")) }
            SocialLink(to="https://www.linkedin.com/in/binhtran432k", typ=SocialType::LinkedIn)
            SocialLink(to="https://github.com/binhtran432k", typ=SocialType::GitHub)
            SocialLink(to="#", typ=SocialType::Instagram)
            SocialLink(to="https://www.facebook.com/binhtran432k", typ=SocialType::Facebook)
            SocialLink(to="https://www.youtube.com/@binhtran432k", typ=SocialType::Youtube)
        }
    }
}
