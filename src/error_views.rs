use perseus::{errors::ClientError, prelude::*};
use sycamore::prelude::*;

fn get_error_page<G: Html>(cx: Scope, title: String, message: String) -> (View<SsrNode>, View<G>) {
    (
        view! { cx,
            title { (title) }
        },
        view! { cx,
            // Don't worry, there are much better ways of styling in Perseus!
            div(class="test") {
                h1 { (title) }
                p { (message) }
            }
        },
    )
}

pub fn get_error_views<G: Html>() -> ErrorViews<G> {
    ErrorViews::new(|cx, err, _err_info, _err_pos| {
        match err {
        ClientError::ServerError { status, message: _ } => match status {
            404 => get_error_page(
                cx,
                "Page not found".to_string(),
                "Sorry, that page doesn't seem to exist.".to_string(),
            ),
            // If the status is 4xx, it's a client-side problem (which is weird, and might indicate tampering)
            _ if (400..500).contains(&status) => get_error_page(
                cx,
                "Error".to_string(),
                "There was something wrong with the last request, please try reloading the page."
                    .to_string(),
            ),
            // 5xx is a server error
            _ => get_error_page(
                cx,
                "Error".to_string(),
                "Sorry, our server experienced an internal error. Please try reloading the page."
                    .to_string(),
            ),
        },
        ClientError::Panic(_) => get_error_page(
            cx,
            "Critical error".to_string(),
            "Sorry, but a critical internal error has occurred. This has been automatically reported to our team, who'll get on it as soon as possible. In the mean time, please try reloading the page."
                .to_string(),
        ),
                    // Network errors (but these could be caused by unexpected server rejections)
        ClientError::FetchError(_) => get_error_page(
            cx,
            "Error".to_string(),
            "A network error occurred, do you have an internet connection? (If you do, try reloading the page.)"
                .to_string(),
        ),
        // An internal failure within Perseus (these can very rarely happen due
        // to network errors or corruptions)
        ClientError::InvariantError(_) |
        // Only if you're using plugins
        ClientError::PluginError(_) |
        // Only if you're using state freezing
        ClientError::ThawError(_) |
        // Severe failures in working with the browser (this doesn't do a lot
        // right now, but it will in future, as Perseus supports PWAs etc.)
        ClientError::PlatformError(_) |
        // Only if you're using preloads (these are usually better
        // caught at the time of the function's execution, but sometimes
        // you'll just want to leave them to a popup error)
        ClientError::PreloadError(_) => get_error_page(
            cx,
            "Error".to_string(),
            format!("An internal error has occurred: '{}'.", err).to_string(),
        )}
    })
}
