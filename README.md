# Home Dashboard

Home Dashboard is a dashboard created to manage various aspects of your home, such as camera management. The dashboard is built with Next.js and uses components from the shadcnui library. The backend, which communicates with a Raspberry Pi, is developed in Python using the FastAPI framework, as the Raspberry Pi has more developed libraries for Python than for other languages.

## Features

-   **Camera Management**: View and manage your home security cameras.
-   **Raspberry Pi Integration**: Uses FastAPI for efficient communication with the Raspberry Pi.
-   **UI Components**: Utilizes the shadcnui library for modern and responsive components.

## Technologies Used

### Frontend

-   [Next.js](https://nextjs.org/): React framework for building the dashboard.
-   [shadcnui](https://shadcnui.com/): UI components library.

### Backend

-   [Python](https://www.python.org/): Programming language used for the backend.
-   [FastAPI](https://fastapi.tiangolo.com/): Framework for building APIs.

## Installation

### Prerequisites

-   Node.js (version 14 or later)
-   Python (version 3.7 or later)
-   Raspberry Pi with a compatible operating system

### Frontend

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/home-dashboard.git
    ```
2. Navigate to the project directory:
    ```sh
    cd home-dashboard
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```
4. Start the application:
    ```sh
    npm run dev
    ```

### Backend

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Create a virtual environment:
    ```sh
    python -m venv venv
    ```
3. Activate the virtual environment:

    - On macOS/Linux:
        ```sh
        source venv/bin/activate
        ```
    - On Windows:
        ```sh
        venv\Scripts\activate
        ```

4. Install the dependencies:
    ```sh
    pip install -r requirements.txt
    ```
5. Start the FastAPI server:
    ```sh
    uvicorn main:app --reload
    ```

## Configuration

Ensure you properly configure the configuration files for both the frontend and the backend. Specific details on the required configurations can be found in the respective `README.md` files within the `frontend` and `backend` folders.

## Contributing

Contributions are welcome! This repository use the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard. If you have ideas, suggestions, or corrections, feel free to open a pull request or contact me directly.

## License

This project is licensed under the [MIT License](LICENSE).

---

I hope this dashboard helps you manage your home more efficiently and conveniently. If you have any questions or need assistance, don't hesitate to contact me.
