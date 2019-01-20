#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
extern crate rocket_contrib;

use std::io;

use rocket::response::NamedFile;
use rocket_contrib::serve::StaticFiles;

#[get("/")]
fn index() -> io::Result<NamedFile> {
    NamedFile::open("ui/dist/index.html")
}

fn main() {
    rocket::ignite().mount("/", routes![index]).mount("/", StaticFiles::from("ui/dist")).launch();
}
