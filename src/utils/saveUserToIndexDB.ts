import { showAlert } from "../components/alerts";
import { UserData } from "../types/UserTypes";
import { generateUniqueKey } from "./convert";
import { ALERT_TYPES } from "./enums";

export const saveUserData = (data: UserData) => {
    const openRequest = indexedDB.open("myDatabase", 1);
    openRequest.onupgradeneeded = function (e) {
        if (e.target instanceof IDBOpenDBRequest) {
            const db = e.target.result;
            if (!db.objectStoreNames.contains('users')) {
                db.createObjectStore('users', { autoIncrement: false });
            }
        }
    };
    openRequest.onsuccess = function (e) {
        if (e.target instanceof IDBOpenDBRequest) {
            const db = e.target.result;
            const transaction = db.transaction(["users"], "readwrite");
            const store = transaction.objectStore("users");
            const newUserKey = generateUniqueKey();
            store.add(data, newUserKey);
            showAlert("درخواست شما با موفقیت ثبت شد!", ALERT_TYPES.SUCCESS);
        }
    }
    openRequest.onerror = function (e) {
        const dbRequest = e.target as IDBOpenDBRequest;
        console.error("Error opening database:", dbRequest.error);
    };
}