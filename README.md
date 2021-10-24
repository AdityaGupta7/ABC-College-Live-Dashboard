The app has/does the following-

1. Fetch Live Data from Socket connection and then fetches the data for all/certain table(s) based on the live data response. The script /js/socket.io.min.js itself has been used and no external library is installed for this purpose.

2. Custom sort feature for each table.

3. The UI is completely responsive.

4. The components have been segregated in an optimal way and are intended to perform their own actions only. The components can work in standalone setting as well.

5. Redux, without a middleware, has been used for global state management.

6. Client's actions like sorting a table's data and expanding/collapsing a table have been made persistent.

7. Soothing transition has been added for attributes section.