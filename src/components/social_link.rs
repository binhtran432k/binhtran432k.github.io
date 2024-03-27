use std::fmt;

use sycamore::prelude::*;

#[component]
pub fn SocialLink<G: Html>(cx: Scope, SocialProps { to, typ }: SocialProps) -> View<G> {
    view! {cx,
        a(href=to,
            target="_blank",
            title=format!("Social link of {}", typ.to_string()),
            class=format!("icon icon--{} colored-icon", typ.to_string()))
        {
            span{}
        }
    }
}

#[derive(Clone, Copy)]
pub enum SocialType {
    GitHub,
    Youtube,
    Instagram,
    Facebook,
    LinkedIn,
}

impl fmt::Display for SocialType {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        match self {
            SocialType::GitHub => write!(f, "github"),
            SocialType::Youtube => write!(f, "youtube"),
            SocialType::Instagram => write!(f, "instagram"),
            SocialType::Facebook => write!(f, "facebook"),
            SocialType::LinkedIn => write!(f, "linkedin"),
        }
    }
}

#[derive(Prop)]
pub struct SocialProps {
    pub to: &'static str,
    pub typ: SocialType,
}
