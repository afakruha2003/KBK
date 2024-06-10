from flask import current_app as app, jsonify, abort

@app.route('/')
def index():
    return jsonify({"message": "Welcome to Köşe Bucak Kültür API"})

@app.route('/api/cities', methods=['GET'])
def get_cities():
    cities = [
        {"id": 1, "name": "Istanbul"},
        {"id": 2, "name": "Ankara"},
        {"id": 3, "name": "Izmir"}
    ]
    return jsonify(cities)

@app.route('/api/cities/<int:city_id>/events', methods=['GET'])
def get_city_events(city_id):
    events = [
        {"id": 1, "title": "Music Festival", "city_id": city_id},
        {"id": 2, "title": "Food Fair", "city_id": city_id}
    ]
    return jsonify(events) if events else abort(404, description="No events found for this city")

@app.route('/api/events/<int:event_id>', methods=['GET'])
def get_event(event_id):
    event = {"id": event_id, "title": "Music Festival", "description": "A great music event!"}
    return jsonify(event) if event else abort(404, description="Event not found")
