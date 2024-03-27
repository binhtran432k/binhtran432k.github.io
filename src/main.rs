extern crate alloc;

#[cfg(client)]
use lol_alloc::{FreeListAllocator, LockedAllocator};

#[cfg(client)]
#[global_allocator]
static ALLOCATOR: LockedAllocator<FreeListAllocator> =
    LockedAllocator::new(FreeListAllocator::new());

mod components;
mod error_views;
mod layouts;
mod templates;

use perseus::prelude::*;
use std::fs;
use sycamore::prelude::view;

#[perseus::main_export]
pub fn main<G: Html>() -> PerseusApp<G> {
    PerseusApp::new()
        .template(crate::templates::index::get_template())
        .error_views(crate::error_views::get_error_views())
        .index_view(|cx| {
            view! { cx,
                html (lang="en") {
                    head {
                        meta(charset = "UTF-8")
                        meta(name = "viewport", content = "width=device-width, initial-scale=1.0")
                        crate::components::seo::Seo()
                        // fonts
                        link (rel="preconnect", href="https://fonts.googleapis.com")
                        link (rel="preconnect", href="https://fonts.gstatic.com", crossorigin="crossorigin")
                        link (rel="preload", href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Orbitron:wght@400;700&display=swap", as="style", onload="this.onload=null;this.rel='stylesheet'")
                        // styles
                        style { (fs::read_to_string("static/styles/base.css").expect("Cannot read base.css")) }
                        // No scripts alternative
                        noscript {
                            link (href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&family=Orbitron:wght@400;700&display=swap", rel="stylesheet")
                        }
                    }
                    body {
                        // Quirk: this creates a wrapper `<div>` around the root `<div>` by necessity
                        PerseusRoot()
                    }
                }
            }
        })
}
