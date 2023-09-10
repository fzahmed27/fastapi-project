from flask import Flask, request, jsonify
from flask_cors import CORS
import piplates.RELAYplate as RELAY

app = Flask(__name__)
CORS(app)

ppADDR = 0
ppADDR1 = 1

@app.route('/api/valve', methods=['POST'])
def toggle_valve():
    data = request.json
    valve_id = data['id']
    action = data['action']
    
    if valve_id < 4:
        if action == 'on':
            RELAY.relayON(ppADDR, valve_id)
        else:
            RELAY.relayOFF(ppADDR, valve_id)
    else:
        if action == 'on':
            RELAY.relayON(ppADDR1, valve_id - 4)
        else:
            RELAY.relayOFF(ppADDR1, valve_id - 4)
            
    return jsonify({'message': 'success'})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
