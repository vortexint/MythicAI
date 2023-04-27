// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;

//Tauri commands https://tauri.app/v1/guides/features/command

#[tauri::command]
async fn load_core() {
  // start backend/gen_core.py
  let output = Command::new("python")
    .arg("backend/gen_core.py")
    .output()
    .expect("failed to execute process");
  println!("status: {}", output.status);
}

#[tauri::command]
fn core_complete(strategy: String) -> String {
  // TODO: tell python script to complete string, stream output to JS
  println!("Starting gen_core.py with strategy {}", strategy);
  "Not impl.".to_string()
}

#[tauri::command]
fn download_git_repo(url: String) {
  println!("Downloading repo {}", url);
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(
          tauri::generate_handler![
            load_core,
            core_complete,
            download_git_repo]
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}