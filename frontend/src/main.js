import $ from 'jquery';
import axios from 'axios';

const API_URL = 'http://localhost:3000/todos';

$('#get').on('click', async () => {
    const res = await axios.get(API_URL);
    console.log(res.data);
    $('#response1').text(JSON.stringify(res.data, null, 2));
})
$('#get_id').on('click', async () => {
    const res = await axios.get(`${API_URL}/${$('#todo_id').val()}`);
    console.log(res.data);
    $('#response2').text(JSON.stringify(res.data, null, 2));
})

$('#post').on('click', async () => {
    const res = await axios.post(API_URL, {
        text: $('#todo_text').val(),
        checkbox: false,
    });
})
$('#put_id').on('click', async () => {
    const res = await axios.put(`${API_URL}/${$('#todo_id').val()}`, {
        text: $('#todo_text').val(),
    });
    $('#response2').text(JSON.stringify(res.data, null, 2));
})
$('#delete_id').on('click', async () => {
    const res = await axios.delete(`${API_URL}/${$('#todo_id').val()}`);
    $('#response2').text(JSON.stringify(res.data, null, 2));
})
