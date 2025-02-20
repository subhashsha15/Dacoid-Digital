export const initDB = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('QuizDB', 1);
        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('attempts')) {
                db.createObjectStore('attempts', { keyPath: 'id', autoIncrement: true });
            }
        };
        request.onsuccess = (event) => {
            resolve(event.target.result);
        };
        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
}


export const addAttempt = async (attempt) => {
    return initDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('attempts', 'readwrite');
            const store = transaction.objectStore('attempts');
            const request = store.add(attempt);
            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error);
        });
    });
}

export const getAllAttempts = async () => {
    return initDB().then(db => {
        return new Promise((resolve, reject) => {
            const transaction = db.transaction('attempts', 'readonly');
            const store = transaction.objectStore('attempts');
            const request = store.getAll();
            request.onsuccess = () => resolve(request.result);
            request.onerror = (e) => reject(e.target.error);
        });
    });
}
