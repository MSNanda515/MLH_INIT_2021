import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: MyHomePage(title: 'Reminder App'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final String title;

  String messageTitle = "Empty";
  String notificationAlert = "alert";

  FirebaseMessaging _firebaseMessaging = FirebaseMessaging();

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;
  var reminders = [
    {"name": "Reminder 1", "date": "7 June 2021", "time": "21:00"},
    {"name": "Reminder 2", "date": "8 June 2021", "time": "21:00"},
    {"name": "Reminder 3", "date": "9 June 2021", "time": "21:00"},
  ];

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              "Your Reminders are:",
              style: TextStyle(fontSize: 30),
            ),
<<<<<<< HEAD
            Column(
                children: reminders
                    .map(
                      (reminder) => Card(
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: <Widget>[
                            ListTile(
                              title: Text(reminder["name"] ?? ''),
                              subtitle: Text((reminder["date"] ?? "") +
                                  " " +
                                  (reminder["time"] ?? '')),
                            ),
                            Row(
                              mainAxisAlignment: MainAxisAlignment.end,
                              children: <Widget>[
                                IconButton(
                                    onPressed: () {}, icon: Icon(Icons.check)),
                                SizedBox(width: 8),
                                IconButton(
                                    onPressed: () {}, icon: Icon(Icons.delete))
                              ],
                            ),
                            SizedBox(height: 10),
                          ],
                        ),
                      ),
                    )
                    .toList()),
=======
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headline4,
            ),
>>>>>>> parent of c244efc (Working on UI)
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Increment',
        child: Icon(Icons.add),
      ), // This trailing comma makes auto-formatting nicer for build methods.
    );
  }
}
