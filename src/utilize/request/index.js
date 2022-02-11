/* eslint-disable import/prefer-default-export */

const BASE_URL = "";

export async function request(endpoint, method,jsonOutPut, body, contentType = "application/json") {
    try {
        const response = await fetch(BASE_URL + endpoint, {
            method,
            body,
            headers: {
                "Content-Type": contentType,
                accept: "*/*",
                "Output-Format": jsonOutPut ? "JSON" : null,
                Authorization: `Basic ${localStorage.getItem("jwt_token")}`,
            },
        });

        const statusCode = response.status;
        if (statusCode === 204) {
            return {
                jsonResponse: { message: "Item deleted successfully" },
                status: statusCode,
            };
        }

        const json = await response.json();

        if (statusCode === 401) {
            // localStorage.clear();
            // window.location("/login");
        }

        return {
            jsonResponse: json,
            status: statusCode,
        };
    } catch (error) {
        return {
            jsonResponse: { message: "Server Error!!!" },
            status: 500,
        };
    }
}
