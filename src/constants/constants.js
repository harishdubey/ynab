export const apiTokenHeader = {
    headers: {
        'Authorization': 'Bearer e42e57f578018259cc0bc8a844a31c786b9d13648d51eeec9d7a1b11bbc36a3a'
    }
}

export const timeStampToDate = (value) => {
    let updateDate = "";
    if (value) {
        let convertDate = new Date(value);
        let updateMonth = ("0" + (convertDate.getMonth() + 1)).slice(-2)
        let updateDay = ("0" + convertDate.getDate()).slice(-2)
        updateDate = `${updateDay}-${updateMonth}-${convertDate.getFullYear()}`;
    }
    return updateDate;
}