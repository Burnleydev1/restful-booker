# restful-booker

````markdown
# 📉 Baseline Load Test: Restful Booker API

This project contains a JMeter performance test strategy designed to establish a baseline for the **Restful Booker API**. 

The goal of this test is to verify system behavior under a steady, realistic load, identifying the "Green Zone" (safe operating capacity) before attempting stress or spike testing.

---

## 🏗️ Test Strategy

We are not just "hitting" the server; we are simulating a realistic usage pattern with a distinct lifecycle.

| Phase | Duration | Details |
| :--- | :--- | :--- |
| **Ramp-Up** | 60 sec | Gradually adds users to warm up caches/DB connections. |
| **Steady State** | 9 mins | Holds load constant to capture reliable metrics (TPS, Latency). |
| **Ramp-Down** | Instant | Test concludes after the duration. |

* **Target Load:** 50 Concurrent Users
* **Target System:** [Restful Booker API](https://restful-booker.herokuapp.com) (Public Demo)
* **Protocol:** HTTPS

---

## 🛠️ Prerequisites

To run this test, you need:
1.  **Java:** JDK 8 or higher installed (`java -version`).
2.  **Apache JMeter:** Version 5.0 or higher.
    * [Download JMeter Here](https://jmeter.apache.org/download_jmeter.cgi)

---

## 🚀 How to Run the Test (The "Pro" Way)

Running load tests in the JMeter GUI consumes high memory and skews results. **Always run load tests from the command line (CLI).**

### 1. Clone the Repo
```bash
git clone [git@github.com:Burnleydev1/restful-booker.git](git@github.com:Burnleydev1/restful-booker.git)
cd performance-engineering-portfolio/restful-booker
````

### 2\. Prepare the Environment

Ensure you have a folder ready for the results. (The HTML report folder must not exist before running the command).

  * *Note: If `HTML_Report` already exists, delete it.*

### 3\. Execute the Command

**For Windows:**

```cmd
jmeter -n -t restful_booker_load.jmx -l results.jtl -e -o HTML_Report
```

*If `jmeter` is not in your system PATH, provide the full path to your bin folder:*

```cmd
"C:\path\to\apache-jmeter\bin\jmeter.bat" -n -t restful_booker_load.jmx -l results.jtl -e -o HTML_Report
```

**For Mac/Linux:**

```bash
sh /path/to/jmeter/bin/jmeter.sh -n -t restful_booker_load.jmx -l results.jtl -e -o HTML_Report
```

-----

## 📊 Viewing the Results

Once the test completes:

1.  Go to the `HTML_Report` folder created in your directory.
2.  Open `index.html` in your browser.
3.  Analyze the **Dashboard** for:
      * **APDEX Score:** User satisfaction rating.
      * **Response Time:** Look for the "90th Percentile" vs "Average".
      * **Throughput:** The actual TPS achieved.

-----

## ⚠️ Important Note on Public APIs

This test targets `restful-booker.herokuapp.com`, which is a shared public demo environment.

  * **Do not** increase the load beyond 50-100 users.
  * **Do not** run this test for extended periods (hours) as it may affect others learning on the platform.

-----

### 👤 Author

**Bonalais Amahnui A.** *Performance Engineering Enthusiast* [LinkedIn Profile](https://www.linkedin.com/in/abongwa-bonalais-a4a34a1a9/)

```

### 💡 One small task for you:
1.  Replace `YOUR_USERNAME` with your actual GitHub username.
2.  Replace `Your_LinkedIn_URL` at the bottom with your actual profile link.


```
