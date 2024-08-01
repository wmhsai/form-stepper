import { useState } from 'react';
import { UserData } from '../types/UserTypes';

const useFetchUserData = () => {
    const [userData, setUserData] = useState<UserData[]>([]);

    const fetchDataFromIndexedDB = () => {
        const openRequest = indexedDB.open("myDatabase", 1);
        openRequest.onupgradeneeded = function (e) {
            if ((e.target as IDBOpenDBRequest).result) {
                const db = (e.target as IDBOpenDBRequest).result;
                if (!db.objectStoreNames.contains('users')) {
                    db.createObjectStore('users', { autoIncrement: true });
                }
            }
        };
        openRequest.onsuccess = function (e) {
            const db = (e.target as IDBOpenDBRequest).result;
            const transaction = db.transaction(["users"], "readonly");
            const objectStore = transaction.objectStore("users");
            const getRequest = objectStore.getAll();
            getRequest.onsuccess = function () {
                setUserData(getRequest.result);
            };
            getRequest.onerror = function () {
                console.error("Error fetching data:", getRequest.error);
            };
        };

        openRequest.onerror = function (e) {
            console.error("Error opening database:", (e.target as IDBOpenDBRequest).error);
        };
    };

    return { userData, fetchDataFromIndexedDB };
};

export default useFetchUserData;
