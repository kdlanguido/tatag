const formatDateToString = (date: Date) => {
    if (!date) return ""

    const d = new Date(date)

    if (isNaN(d.getTime())) return ""

    return d.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    })
}

const formateDateToInputDate = (date: Date) => {
    if (!date) return ""

    return new Date(date)
        .toISOString()
        .split("T")[0]
}

export {
    formatDateToString,
    formateDateToInputDate
}