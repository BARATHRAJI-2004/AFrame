.calculator {
  width: 300px;
  margin: 0 auto;
  text-align: center;
}

.display {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  font-size: 24px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
}

.buttons button {
  width: 100%;
  height: 50px;
  font-size: 20px;
  cursor: pointer;
}

.history {
  margin-top: 20px;
}

.history h3 {
  margin-bottom: 10px;
}

#history-list {
  list-style-type: none;
  padding: 0;
}

#history-list li {
  margin-bottom: 5px;
}
